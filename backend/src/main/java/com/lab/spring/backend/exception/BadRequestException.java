package com.lab.spring.backend.exception;

import org.springframework.graphql.execution.ErrorType;
import graphql.GraphQLError;
import graphql.language.SourceLocation;
import org.springframework.http.HttpStatus;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

public class BadRequestException extends RuntimeException implements GraphQLError {

    private final HttpStatus status = HttpStatus.BAD_REQUEST;

    private String message = "Bad request";

    private List<SourceLocation> locations;

    public BadRequestException(String message, Object... args) {
        this.message = args[0] + ": " + message;
    }

    @Override
    public String getMessage() {
        return message;
    }

    @Override
    public Map<String, Object> getExtensions() {
        Map<String, Object> customAttributes = new LinkedHashMap<>();
        customAttributes.put("errorCode", this.status.value());
        return customAttributes;
    }

    @Override
    public ErrorType getErrorType() {
        return ErrorType.BAD_REQUEST;
    }

    @Override
    public List<SourceLocation> getLocations() {
        return locations;
    }

    @Override
    public Map<String, Object> toSpecification() {
        return GraphQLError.super.toSpecification();
    }

}
