# Stage 1: Compile and Build angular codebase
# Use official node image as the base image
FROM node:16.20.1 as build

# Set the working directory
WORKDIR /workspace/app

# Add the angular CLI
RUN npm install -g @angular/cli

# Add the application code to the image
COPY . /workspace/app

# Install all the dependencies
RUN npm install

# Generate the build of the application
RUN ng build -c production

# Stage 2: Serve app with nginx server
# Use official nginx image as the base image
FROM nginx:1.21

# Delete the default nginx.html file
RUN rm -rf /usr/share/nginx/html/*

# Copy the build output to replace the default nginx contents.
COPY --from=build /workspace/app/dist/midjourneydigital-ui /usr/share/nginx/html

# Copy the custom nginx configuration
COPY configs/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Run nginx
CMD ["nginx", "-g", "daemon off;"]