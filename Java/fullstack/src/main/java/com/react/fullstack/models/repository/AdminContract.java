package com.react.fullstack.models.repository;
import java.sql.SQLException;
import java.util.List;

public interface AdminContract<TModel> {

	List<TModel> getAdminRecords() throws ClassNotFoundException, SQLException, Exception;
}
