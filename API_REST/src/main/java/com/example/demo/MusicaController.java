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
    AtomicLong nextId = new AtomicLong(0);

    // Petición GET para toda la musica que haya en la lista, no se especifica ninguna en concreto
    @GetMapping
    public Collection<Musica> musica() {
        return musica.values();
    }

    // Petición PUT para actualizar la musica de la lista
    @PutMapping("/{id}")
    // Se necesita la id de la musica para modificar y la nueva musica en sí
    public ResponseEntity<Musica> actualizarMsc(@PathVariable long id, @RequestBody Musica nuevoMsc) {
        // Se obtiene la musica antigua a modificar a través de la id
        Musica mscAntiguo = musica.get(nuevoMsc.getId());

        if(mscAntiguo != null) {

            musica.put (id, nuevoMsc);
            return new ResponseEntity<>(nuevoMsc, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Petición GET para obtener una sola musica dado su id
    @GetMapping("/{id}")
    public ResponseEntity<Musica> getMusica(@PathVariable long id) {

        Musica msc = musica.get(id);

        if(msc != null) {
            return new ResponseEntity<>(msc, HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
