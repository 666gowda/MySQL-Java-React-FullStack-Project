package com.react.fullstack.models.services;

import java.sql.SQLException;
import java.util.List;

public interface RevenueServiveContract<TModel> {

	List<TModel> fetchRevenue() throws SQLException, Exception, ClassNotFoundException;

}
