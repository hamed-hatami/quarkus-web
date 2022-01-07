package org.hamed.quarkus.model.repository;

import org.hamed.quarkus.model.entity.Car;

import java.util.List;

import javax.enterprise.context.ApplicationScoped;

import io.quarkus.hibernate.orm.panache.PanacheRepository;

@ApplicationScoped
public class CarRepository implements PanacheRepository<Car> {

    public void createCar(Car car) {
        car.persist();
    }

    public List<Car> findByName(String name) {
        return find("name", name)
                .firstResult();
    }

    public List<Car> CarList() {
        return findAll()
                .list();
    }

}
