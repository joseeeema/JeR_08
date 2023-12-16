package com.example.demo;

import java.util.Collection;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/musica")
public class MusicaController {
    
    // HashMap con la colección de la musica almacenada
    Map<Long, Musica> musica = new ConcurrentHashMap<>();
    AtomicLong nextIntensidad = new AtomicLong(0);

    // Petición GET para toda la musica que haya en la lista, no se especifica ninguna en concreto
    @GetMapping
    public Collection<Musica> musica() {
        return musica.values();
    }

    // Petición PUT para actualizar la musica de la lista
    @PutMapping("/{intensidad}")
    // Se necesita la intensidad de la musica para modificar y la nueva musica en sí
    public ResponseEntity<Musica> actualizarMsc(@PathVariable long intensidad, @RequestBody Musica nuevoMsc) {
        // Se obtiene la musica antigua a modificar a través de la intensidad
        Musica mscAntiguo = musica.get(nuevoaMsc.getIntensidad());

        if(mscAntiguo != null) {

            musica.put (intensidad, nuevoMsc);
            return new ResponseEntity<>(nuevoMsc, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Petición GET para obtener una sola musica dado su intensidad
    @GetMapping("/{intensidad}")
    public ResponseEntity<Musica> getMusica(@PathVariable long intensidad) {

        Musica msc = musica.get(intensidad);

        if(msc != null) {
            return new ResponseEntity<>(msc, HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
