package org.hamed.quarkus.model.repository;

import org.hamed.quarkus.model.entity.Car;

import java.util.List;

import javax.enterprise.context.ApplicationScoped;
import javax.transaction.Transactional;

import io.quarkus.hibernate.orm.panache.PanacheRepository;

@ApplicationScoped
public class CarRepository implements PanacheRepository<Car> {

    @Transactional
    public Long createCar(Car car) {
        car.persist();
        return car.id;
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
