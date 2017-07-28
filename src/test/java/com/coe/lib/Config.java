package com.coe.lib;

import java.util.Map;


public class Config {
	private Map<String, String> settings;
	private String isbn;
	private String baseUrl;
	
	public String getIsbn() {
        return isbn;
    }
	public String getBaseUrl() {
        return baseUrl;
    }
	public Map<String, String> getSettings() {
        return settings;
    }
}