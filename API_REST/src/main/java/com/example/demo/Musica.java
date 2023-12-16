package com.example.demo;

public class Musica {
    
    private long intensidad;
    private long id;

    public Musica(long intensidad) {
        this.intensidad = intensidad;
    }

    public long getIntensidad() {
        return intensidad;
    }

    public void setIntensidad(long id) {
        this.intensidad = intensidad;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "Musica [intensidad=" + intensidad + "]";
    }

}