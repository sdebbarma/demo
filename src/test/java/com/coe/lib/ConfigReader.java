package com.coe.lib;

import java.io.File;
import java.io.IOException;
import com.coe.lib.Config;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.dataformat.yaml.YAMLFactory;

public class ConfigReader {

	Config config = null;

    public ConfigReader() {
        loadProperties();
    }

    private void loadProperties() {
    	ObjectMapper mapper = new ObjectMapper(new YAMLFactory());
		try {
			config = mapper.readValue(new File("src/test/java/com/coe/settings/config.yaml"), Config.class);
		} catch (JsonParseException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		} catch (JsonMappingException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		} catch (IOException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
    }

    public String readProperty(String key) {
        return config.getSettings().get(key);
    }
}