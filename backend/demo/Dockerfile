# Use official Java 21 image
FROM eclipse-temurin:21-jdk

# Set working directory inside container
WORKDIR /app

# Copy Maven wrapper & project metadata first (to enable layer caching)
COPY mvnw mvnw
COPY .mvn .mvn
COPY pom.xml pom.xml

# Make mvnw executable (Linux containers need this)
RUN chmod +x mvnw

# Download dependencies first (speeds up future builds)
RUN ./mvnw dependency:go-offline -B

# Copy the rest of the application
COPY src src

# Build the application
RUN ./mvnw package -DskipTests

# Expose port 8080 (Render detects this)
EXPOSE 8080

# Run the application
CMD ["java", "-jar", "target/demo-0.0.1-SNAPSHOT.jar"]
