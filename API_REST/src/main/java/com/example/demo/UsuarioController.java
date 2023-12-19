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
@RequestMapping("/usuarios")
public class UsuarioController {
    
    // HashMap con la colección de usuarios almacenados
    Map<Long, Usuario> usuarios = new ConcurrentHashMap<>();
    AtomicLong nextId = new AtomicLong(0);

    // Petición GET para todos los usuarios que haya en la lista, no se especifica ninguno en concreto
    @GetMapping
    public Collection<Usuario> usuarios() {
        return usuarios.values();
    }

    // Petición POST para añadir el Usuario a la lista
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Usuario añadirUs(@RequestBody Usuario us) {
        // Para obtener su identificador, se incrementa el id de la clase
        long id = nextId.incrementAndGet();
        us.setId(id);
        // Se añade a la lista
        usuarios.put(id, us);

        return us;
    }

    // Petición PUT para actualizar un Usuario de la lista
    @PutMapping("/{id}")
    // Se necesita el id del Usuario a modificar y el nuevo Usuario en sí
    public ResponseEntity<Usuario> actualizarUs(@PathVariable long id, @RequestBody Usuario nuevoUs) {
        // Se obtiene el Usuario antiguo a modificar a través del identificador 
        Usuario usAntiguo = usuarios.get(nuevoUs.getId());

        if(usAntiguo != null) {

            usuarios.put(id, nuevoUs);
            return new ResponseEntity<>(nuevoUs, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Petición GET para obtener un solo Usuario dado su identificador
    @GetMapping("/{id}")
    public ResponseEntity<Usuario> getUsuario(@PathVariable long id) {

        Usuario us = usuarios.get(id);

        if(us != null) {
            return new ResponseEntity<>(us, HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Petición DELETE para eliminar un Usuario
    @DeleteMapping("/{id}")
    public ResponseEntity<Usuario> borraUs(@PathVariable long id) {

         Usuario usGuardado = usuarios.get(id);

        if(usGuardado != null) {
            usuarios.remove(usGuardado.getId());
            nextId.decrementAndGet();
            return new ResponseEntity<>(usGuardado, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}