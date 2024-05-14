package com.react.fullstack.models.dto;

public class AdminAccess {

	private String admin_email;
	private String admin_password;
	private String admin_name;

	public AdminAccess() {
	}

	public AdminAccess(String admin_email, String admin_password, String admin_name) {
		this.admin_email = admin_email;
		this.admin_password = admin_password;
		this.admin_name = admin_name;
	}

	public String getAdmin_email() {
		return admin_email;
	}

	public void setAdmin_email(String admin_email) {
		this.admin_email = admin_email;
	}

	public String getAdmin_password() {
		return admin_password;
	}

	public void setAdmin_password(String admin_password) {
		this.admin_password = admin_password;
	}

	public String getAdmin_name() {
		return admin_name;
	}

	public void setAdmin_name(String admin_name) {
		this.admin_name = admin_name;
	}

}
