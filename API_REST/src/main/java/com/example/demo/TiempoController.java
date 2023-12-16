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
@RequestMapping("/tiempo")
public class TiempoController {
    
    // HashMap con la colección de tiempo almacenados
    Map<Long, Tiempo> tiempo = new ConcurrentHashMap<>();
    AtomicLong nextId = new AtomicLong(0);

        // Petición GET para todos los tiempo que haya en la lista, no se especifica ninguno en concreto
        @GetMapping
        public Collection<Tiempo> tiempo() {
            return tiempo.values();
        }
    
        // Petición POST para añadir el tiempo a la lista
        @PostMapping
        @ResponseStatus(HttpStatus.CREATED)
        public Tiempo añadirTiempo(@RequestBody Tiempo tmp) {
            // Para obtener su identificador, se incrementa el id de la clase
            long id = nextId.incrementAndGet();
            tmp.setId(id);
            // Se añade a la lista
            tiempo.put(id, tmp);
    
            return tmp;
        }
    
        // Petición PUT para actualizar el tiempo de la lista
        @PutMapping("/{id}")
        // Se necesita el id del tiempo a modificar y el nuevo tiempo en sí
        public ResponseEntity<Tiempo> actualizarTmp(@PathVariable long id, @RequestBody Tiempo nuevoTmp) {
            // Se obtiene el tiempo antiguo a modificar a través del identificador 
            Tiempo tmpAntiguo = tiempo.get(nuevoTmp.getId());
    
            if(tmpAntiguo != null) {
    
                tiempo.put(id, nuevoTmp);
                return new ResponseEntity<>(nuevoTmp, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        }
    
        // Petición GET para obtener el tiempo dado su identificador
        @GetMapping("/{id}")
        public ResponseEntity<Tiempo> getTiempo(@PathVariable long id) {
    
            Tiempo tmp = tiempo.get(id);
    
            if(tmp != null) {
                return new ResponseEntity<>(tmp, HttpStatus.OK);
            }
            else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        }
    
        // Petición DELETE para eliminar el tiempo
        @DeleteMapping("/{id}")
        public ResponseEntity<Tiempo> borraTmp(@PathVariable long id) {
    
            Tiempo tmpGuardado = tiempo.get(id);
    
            if(tmpGuardado != null) {
                tiempo.remove(tmpGuardado.getId());
                return new ResponseEntity<>(tmpGuardado, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        }
    }