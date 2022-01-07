package org.hamed.quarkus.api;

import org.hamed.quarkus.model.entity.Car;
import org.hamed.quarkus.model.repository.CarRepository;

import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/car")
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
    public void createCar(Car car) {
        carRepository.createCar(car);
    }
}