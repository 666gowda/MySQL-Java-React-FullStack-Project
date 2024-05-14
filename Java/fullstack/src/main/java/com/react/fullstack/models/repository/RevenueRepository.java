package com.react.fullstack.models.repository;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.react.fullstack.models.dto.Revenue;
import com.react.fullstack.utility.DbQueries;
import com.react.fullstack.utility.DbUtility;

@Repository
public class RevenueRepository implements RevenueContract<Revenue> {

	@Override
	public List<Revenue> getRevenue() throws ClassNotFoundException, SQLException, Exception {
		Connection connection = null;
		Statement statement = null;
		ResultSet resultSet = null;
		List<Revenue> revenueList = null;
		try {
			connection = DbUtility.createConnection();
			statement = connection.createStatement();
			resultSet = statement.executeQuery(DbQueries.TOTAL_REVENUE_QUERY);

			if (resultSet != null) {

				revenueList = new ArrayList<Revenue>();

				while (resultSet.next()) {
					int sortByYear = resultSet.getInt("year");
					String sortByMont = resultSet.getString("month");
					Double totalRevenue = resultSet.getDouble("total_revenue");

					Revenue revenue = new Revenue(sortByYear, sortByMont, totalRevenue);
					revenueList.add(revenue);
				}
			}
			return revenueList;

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
