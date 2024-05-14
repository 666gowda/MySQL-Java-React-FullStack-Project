package com.react.fullstack.models.services;

import java.sql.SQLException;
import java.util.List;

public interface AdminServiceContract<TModel> {

	List<TModel> fetchAdmin() throws SQLException, Exception, ClassNotFoundException;
	
}
