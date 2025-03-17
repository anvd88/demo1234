package com.btec.cooking_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class CookingBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(CookingBackendApplication.class, args);
	}

}
