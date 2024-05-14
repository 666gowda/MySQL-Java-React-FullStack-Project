package com.react.fullstack.utility;

public class DbQueries {

	public final static String SELECT_ALL_QUERY = "select * from products;";
	public final static String SELECT_SINGLE_QUERY = "select * from products where product_id=?;";
	public final static String INSERT_QUERY = "insert into products(product_id, product_name, price, description, product_code, release_date, image_url, star_rating) values(?,?,?,?,?,?,?,?);";
	public final static String UPDATE_QUERY = "update products set product_name=?, price=?, description=?, product_code=?, release_date=?, image_url=?, star_rating=? where product_id=?;";
	public final static String DELETE_QUERY = "delete from products where product_id=?;";
	public final static String TOTAL_REVENUE_QUERY = "select year(release_date) as year, monthname(release_date) as month, sum(price) as total_revenue from products group by year(release_date), monthname(release_date) order by year(release_date), monthname(release_date);";
	public final static String ADMIN_USERS = "select * from adminusers;";
}
