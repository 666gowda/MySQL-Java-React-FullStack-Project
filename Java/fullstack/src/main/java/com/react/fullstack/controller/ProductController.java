package com.react.fullstack.controller;

import java.sql.SQLException;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.react.fullstack.models.dto.AdminAccess;
import com.react.fullstack.models.dto.Products;
import com.react.fullstack.models.dto.Revenue;
import com.react.fullstack.models.services.AdminServiceContract;
import com.react.fullstack.models.services.RevenueServiveContract;
import com.react.fullstack.models.services.ServiceContract;

@RestController
public class ProductController {

	@Autowired
	private ServiceContract<Products, Integer> _service;

	@Autowired
	private RevenueServiveContract<Revenue> _revContract;

	@Autowired
	private AdminServiceContract<AdminAccess> _adminCon;

	@GetMapping(path = "/products/sort/{sortchoice}")
	@CrossOrigin(origins = "*")
	public ResponseEntity<List<Products>> getEmplpoyees(@PathVariable("sortchoice") int sortChoice)
			throws ClassNotFoundException, SQLException {
		try {
			System.out.println("getEmployees");
			List<Products> employeeRecords = _service.fetchRecords(sortChoice);
			System.out.println("request came");
			return ResponseEntity.ok(employeeRecords);
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		} catch (SQLException e) {
			e.printStackTrace();
			return ResponseEntity.internalServerError().build();
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.internalServerError().build();
		}
	}

	@PostMapping(path = "/products/add")
	@CrossOrigin("*")
	public ResponseEntity<Integer> addEmployee(@RequestBody Products employee)
			throws ClassNotFoundException, SQLException, Exception {
		try {
			int res = _service.insertRecord(employee);
			if (res > 0) {
				ResponseEntity.of(Optional.of(res));
				return ResponseEntity.status(HttpStatus.CREATED).build();
			} else {
				ResponseEntity.of(Optional.empty());
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
			}
		} catch (

		ClassNotFoundException e) {
			e.printStackTrace();
			return ResponseEntity.internalServerError().build();
		} catch (SQLException e) {
			e.printStackTrace();
			return ResponseEntity.internalServerError().build();
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.internalServerError().build();
		}

	}

	@PutMapping(path = "/products/update/{eid}")
	@CrossOrigin(origins = "*")
	public ResponseEntity<Integer> updateEmployee(@RequestBody Products employee, @PathVariable("eid") int id)
			throws ClassNotFoundException, SQLException, Exception {
		try {
			int res = _service.modifyRecord(id, employee);
			if (res > 0) {
				ResponseEntity.of(Optional.of(res));
				return ResponseEntity.status(HttpStatus.CREATED).build();
			} else {
				ResponseEntity.of(Optional.empty());
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
			}
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
			return ResponseEntity.internalServerError().build();
		} catch (SQLException e) {
			e.printStackTrace();
			return ResponseEntity.internalServerError().build();
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.internalServerError().build();
		}

	}

	@GetMapping(path = "/products/view/{eid}")
	@CrossOrigin(origins = "*")
	public ResponseEntity<Products> getEmplpoyeeById(@PathVariable("eid") int eid)
			throws ClassNotFoundException, SQLException {
		try {
			Products employee = _service.fetchRecord(eid);
			return ResponseEntity.ok(employee);
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		} catch (SQLException e) {
			e.printStackTrace();
			return ResponseEntity.internalServerError().build();
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.internalServerError().build();
		}
	}

	@DeleteMapping(path = "/products/delete/{eid}")
	@CrossOrigin(origins = "*")
	public ResponseEntity<Integer> deleteEmplpoyeeById(@PathVariable("eid") int eid)
			throws ClassNotFoundException, SQLException {
		try {
			int res = _service.removeRecord(eid);
			return ResponseEntity.ok(res);
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		} catch (SQLException e) {
			e.printStackTrace();
			return ResponseEntity.internalServerError().build();
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.internalServerError().build();
		}
	}

	@GetMapping(path = "/products/totrevenue")
	@CrossOrigin("*")
	public ResponseEntity<List<Revenue>> getRevenue() throws ClassNotFoundException, SQLException, Exception {

		try {
			System.out.println("revenue req came");
			List<Revenue> revRecords = _revContract.fetchRevenue();
			System.out.println(revRecords);
			System.out.println("revenue req sent");
			return ResponseEntity.ok(revRecords);
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
			return ResponseEntity.internalServerError().build();
		} catch (SQLException e) {
			e.printStackTrace();
			return ResponseEntity.internalServerError().build();
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.internalServerError().build();
		}

	}

	@GetMapping(path = "products/adminusers")
	@CrossOrigin("*")
	public ResponseEntity<List<AdminAccess>> getAdmin() throws ClassNotFoundException, SQLException, Exception {

		try {
			System.out.println("admin user req came");
			List<AdminAccess> adminRecords = _adminCon.fetchAdmin();
			System.out.println(adminRecords);
			System.out.println("admin users data req sent");
			return ResponseEntity.ok(adminRecords);
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
			return ResponseEntity.internalServerError().build();
		} catch (SQLException e) {
			e.printStackTrace();
			return ResponseEntity.internalServerError().build();
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.internalServerError().build();
		}

	}
}