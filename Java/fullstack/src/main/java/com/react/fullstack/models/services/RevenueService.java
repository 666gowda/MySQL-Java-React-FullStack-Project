package com.react.fullstack.models.services;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.react.fullstack.models.dto.Revenue;
import com.react.fullstack.models.repository.RevenueContract;

@Service
public class RevenueService implements RevenueServiveContract<Revenue> {

	@Autowired
	private RevenueContract<Revenue> _revenue;
	
	@Override
	public List<Revenue> fetchRevenue() throws SQLException, Exception, ClassNotFoundException {


		try {
			return _revenue.getRevenue();
		}catch (SQLException e) {
			e.printStackTrace();
			throw e;
		}catch (ClassNotFoundException e) {
			e.printStackTrace();
			throw e;
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
		
	}

}
