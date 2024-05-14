package com.react.fullstack.models.repository;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.react.fullstack.models.dto.AdminAccess;
import com.react.fullstack.utility.DbQueries;
import com.react.fullstack.utility.DbUtility;

@Repository
public class AdminRepository implements AdminContract<AdminAccess> {

	@Override
	public List<AdminAccess> getAdminRecords() throws ClassNotFoundException, SQLException, Exception {
		Connection connection = null;
		Statement statement = null;
		ResultSet resultSet = null;
		List<AdminAccess> adminUserList = null;
		try {
			connection = DbUtility.createConnection();
			statement = connection.createStatement();
			resultSet = statement.executeQuery(DbQueries.ADMIN_USERS);

			if (resultSet != null) {

				adminUserList = new ArrayList<AdminAccess>();

				while (resultSet.next()) {

					String admin_email = resultSet.getString("admin_email");
					String admin_password = resultSet.getString("admin_password");
					String admin_name = resultSet.getString("admin_name");

					AdminAccess adminAccess = new AdminAccess(admin_email, admin_password, admin_name);
					adminUserList.add(adminAccess);
				}
			}
			return adminUserList;

		} catch (ClassNotFoundException e) {
			e.printStackTrace();
			throw e;
		} catch (SQLException e) {
			e.printStackTrace();
			throw e;
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}

	}

}
