package com.example.demo;


public class Tiempo {
    
    private long minutos;
    private long segundos;
    private long id;

    public Tiempo(long minutos, long segundos, long id) {
        this.minutos = minutos;
        this.segundos = segundos;
        this.id = id;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getMinutos() {
        return minutos;
    }

    public void setMinutos(long minutos) {
        this.minutos = minutos;
    }

    public long getSegundos() {
        return segundos;
    }

    public void setSegundos(long segundos) {
        this.segundos = segundos;
    }

    @Override
    public String toString() {
        return "Tiempo [ minutos=" + minutos + ", segundos=" + segundos + "]";
    }

}
