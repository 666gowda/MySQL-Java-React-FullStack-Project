package com.react.fullstack.models.dto;

import java.sql.Date;

public class Products {

	private int product_id;
	private String product_name;
	private Double price;
	private String description;
	private String product_code;
	private Date release_date;
	private String image_url;
	private Double star_rating;

	public Products() {
		super();
	}

	public Products(int product_id, String product_name, Double price, String description, String product_code,
			Date release_date, String image_url, Double star_rating) {
		super();
		this.product_id = product_id;
		this.product_name = product_name;
		this.price = price;
		this.description = description;
		this.product_code = product_code;
		this.release_date = release_date;
		this.image_url = image_url;
		this.star_rating = star_rating;
	}

	public String getProduct_name() {
		return product_name;
	}

	public void setProduct_name(String product_name) {
		this.product_name = product_name;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getProduct_code() {
		return product_code;
	}

	public void setProduct_code(String product_code) {
		this.product_code = product_code;
	}

	public Date getRelease_date() {
		return release_date;
	}

	public void setRelease_date(Date release_date) {
		this.release_date = release_date;
	}

	public String getImage_url() {
		return image_url;
	}

	public void setImage_url(String image_url) {
		this.image_url = image_url;
	}

	public Double getStar_rating() {
		return star_rating;
	}

	public void setStar_rating(Double star_rating) {
		this.star_rating = star_rating;
	}

	public int getProduct_id() {
		return product_id;
	}

}
