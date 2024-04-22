package com.example.demo;

import java.util.Objects;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.lang.NonNull;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;
import java.net.InetAddress;
import java.net.UnknownHostException;


@SpringBootApplication
@EnableWebSocket


public class DemoApplication implements WebSocketConfigurer {	

	@Override
	public void registerWebSocketHandlers(@NonNull WebSocketHandlerRegistry registry) {
		registry.addHandler(Objects.requireNonNull(appHandler()), "/game")
			.setAllowedOrigins("*");
	}
	
	@Bean
	public WebSocketAppHandler appHandler(){
		return new WebSocketAppHandler();
	}
	public static void main(String[] args) throws UnknownHostException {
		String IP = InetAddress.getLocalHost().getHostAddress();
		System.out.println(IP);
		SpringApplication.run(DemoApplication.class, args);
	}
}
