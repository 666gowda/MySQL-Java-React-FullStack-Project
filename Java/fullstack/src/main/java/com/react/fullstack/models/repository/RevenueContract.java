package com.react.fullstack.models.repository;

import java.sql.SQLException;
import java.util.List;

public interface RevenueContract<TModel> {

	List<TModel> getRevenue() throws ClassNotFoundException, SQLException, Exception;
	
}
