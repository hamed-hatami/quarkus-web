package org.hamed.quarkus.model.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Table(name = "tb_car")
@Entity
public class Car extends PanacheEntity {

    @Column(name = "manufacturer")
    public String manufacturer;
    @Column(name = "model")
    public String model;
    @Column(name = "name")
    public String name;
    @Column(name = "color")
    public String color;
    @Column(name = "productionYear")
    public String productionYear;
    @Column(name = "fuel")
    public String fuel;
}
