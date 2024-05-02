package com.example.demo;

//import java.util.Map;
import java.util.Objects;
//import java.util.concurrent.ConcurrentHashMap;

import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
//import org.springframework.web.socket.WebSocketExtension;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;
import org.springframework.lang.NonNull;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;




public class WebSocketAppHandler extends TextWebSocketHandler {

    private ObjectMapper mapper = new ObjectMapper();
    private WebSocketSession sesionRiddle;
	private WebSocketSession sesionWiggle;

    @Override
	public void afterConnectionEstablished(@NonNull WebSocketSession session) throws Exception {

		//Asignamos una sesion a cada jugador 
		if(sesionRiddle == null){

			sesionRiddle = session;
			System.out.println("Nuevo usuario: " + session.getId());
			EnviarMensaje(session, "Inicio", "R");

		}else if(sesionWiggle == null){

			sesionWiggle = session;
			System.out.println("Nuevo usuario: " + session.getId());
			EnviarMensaje(session, "Inicio", "W");


		}else{
			// Si ya hay dos sesiones conectadas, no se pueden añadir más jugadores
			System.out.println("Numero maximo de jugadores alcanzado.");
			EnviarMensaje(session, "Error", "Numero maximo de jugadores alcanzado.");
		}
		
	}

    @Override
	public void afterConnectionClosed(@NonNull WebSocketSession session, @NonNull CloseStatus status) throws Exception {
		System.out.println("Sesion cerrada: " + session.getId());
		// Se cierra la sesión correspondiente
		if(session == sesionRiddle) {sesionRiddle = null;}
		else if ( session == sesionWiggle) {sesionWiggle = null;}
		
	}

    @Override
	protected void handleTextMessage(@NonNull WebSocketSession session, @NonNull TextMessage msg) throws Exception {
		
		System.out.println("Mensaje recibido: " + msg.getPayload());
		JsonNode message = mapper.readTree(msg.getPayload()); // Convierte en JSON.

		String requestType = message.get("tipo").asText();
		String contentNode = message.get("contenido").toString();
		
		if(session == sesionRiddle){
			
			if(sesionWiggle != null){
				EnviarMensaje(
                    sesionWiggle, 
				requestType, 
				contentNode
				);
			}

		} else if (session == sesionWiggle){

			EnviarMensaje(
				sesionRiddle, 
				requestType, 
				contentNode
			);

		}else{
			System.out.println("Una sesion desconocida esta intentado mandar informacion.");
		}
		
	}

    private void EnviarMensaje(
		WebSocketSession session, 
		String type, 
		String content) throws Exception {
			
		session.sendMessage(
		new TextMessage(buildStringedJSON(type, content)));
	}

    private @NonNull String buildStringedJSON(String type, String content){ // construye un JSON y devuelve un String
		ObjectNode jsonNode = mapper.createObjectNode();
        jsonNode.put("tipo", type);
        jsonNode.put("contenido", content);
		return Objects.requireNonNull(jsonNode.toString());
	}

}
