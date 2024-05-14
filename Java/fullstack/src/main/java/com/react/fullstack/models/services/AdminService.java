package com.react.fullstack.models.services;

import java.sql.SQLException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.react.fullstack.models.dto.AdminAccess;
import com.react.fullstack.models.repository.AdminContract;

@Service
public class AdminService implements AdminServiceContract<AdminAccess> {

	@Autowired
	private AdminContract<AdminAccess> _AdminContract;

	@Override
	public List<AdminAccess> fetchAdmin() throws SQLException, Exception, ClassNotFoundException {
		try {
			return _AdminContract.getAdminRecords();
		} catch (SQLException e) {
			e.printStackTrace();
			throw e;
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
			throw e;
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
	}

}
