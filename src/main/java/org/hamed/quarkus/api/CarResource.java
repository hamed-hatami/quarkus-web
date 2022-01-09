package org.hamed.quarkus.api;

import org.hamed.quarkus.model.entity.Car;
import org.hamed.quarkus.model.repository.CarRepository;

import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/api/car")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class CarResource {

    @Inject
    CarRepository carRepository;

    @GET
    public List<Car> cars() {
        return carRepository.CarList();
    }

    @POST
    public Response createCar(final Car car) {
        return Response
                .ok(carRepository
                        .createCar(car))
                .build();
    }

    @DELETE
    @Path("{id}")
    public Response createCar(@PathParam("id") final String id) {
        String msg = carRepository.CarDelete(id);
        return Response
                .ok(msg)
                .build();
    }
}