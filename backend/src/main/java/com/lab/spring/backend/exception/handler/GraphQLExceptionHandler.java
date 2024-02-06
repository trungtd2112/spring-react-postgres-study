package com.lab.spring.backend.exception.handler;

import com.lab.spring.backend.exception.BadRequestException;
import graphql.GraphQLError;
import graphql.language.SourceLocation;
import graphql.schema.DataFetchingEnvironment;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.ConstraintViolationException;
import org.hibernate.validator.internal.engine.path.PathImpl;
import org.springframework.graphql.execution.DataFetcherExceptionResolver;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Mono;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class GraphQLExceptionHandler implements DataFetcherExceptionResolver {

    @Override
    public Mono<List<GraphQLError>> resolveException(Throwable exception, DataFetchingEnvironment environment) {
        if (exception instanceof ConstraintViolationException) {
            return Mono.just(handleConstraintViolationException((ConstraintViolationException) exception));
        }
        return Mono.just(List.of());
    }

    private List<GraphQLError> handleConstraintViolationException(ConstraintViolationException exception) {
        return exception.getConstraintViolations().stream()
                .map(constraint -> new BadRequestException(constraint.getMessage(),
                        ((PathImpl) constraint.getPropertyPath()).getLeafNode()))
                .map(badRequestException -> (GraphQLError) badRequestException)
                .collect(Collectors.toList());
    }
}
