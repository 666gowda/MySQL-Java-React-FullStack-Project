package com.react.fullstack.models.dto;

public class Revenue {

	private int sortByYear;
	private String sortByMonth;
	private Double total_revenue;

	public Revenue() {
	}

	public Revenue(int sortByYear, String sortByMonth, Double total_revenue) {
		this.sortByYear = sortByYear;
		this.sortByMonth = sortByMonth;
		this.total_revenue = total_revenue;
	}

	public int getSortByYear() {
		return sortByYear;
	}

	public void setSortByYear(int sortByYear) {
		this.sortByYear = sortByYear;
	}

	public String getSortByMonth() {
		return sortByMonth;
	}

	public void setSortByMonth(String sortByMonth) {
		this.sortByMonth = sortByMonth;
	}

	public Double getTotal_revenue() {
		return total_revenue;
	}

	public void setTotal_revenue(Double total_revenue) {
		this.total_revenue = total_revenue;
	}

}
