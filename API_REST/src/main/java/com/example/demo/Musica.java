package com.example.demo;

public class Musica {
    
    private long intensidad;

    public Musica(long intensidad) {
        this.intensidad = intensidad;
    }

    public long getIntensidad() {
        return intensidad;
    }

    public void setIntensidad(long intensidad) {
        this.intensidad = intensidad;
    }

    @Overrintensidade
    public String toString() {
        return "Musica [intensidad=" + intensidad + "]";
    }

}