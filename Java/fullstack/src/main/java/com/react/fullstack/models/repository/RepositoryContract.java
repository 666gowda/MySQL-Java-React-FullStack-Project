package com.react.fullstack.models.repository;

import java.sql.SQLException;
import java.util.List;

public interface RepositoryContract<TModel, TKey> {

	List<TModel> getRecords() throws ClassNotFoundException, Exception, SQLException;

	TModel getRecord(TKey id) throws ClassNotFoundException, SQLException, Exception;

	Integer addRecord(TModel modelObject) throws ClassNotFoundException, SQLException, Exception;

	Integer updateRecord(TKey id, TModel modelObject) throws ClassNotFoundException, SQLException, Exception;

	Integer deleteRecord(TKey id) throws ClassNotFoundException, SQLException, Exception;

}
