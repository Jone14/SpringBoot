/**
 * 
 */
package com.lc.df.customermanagement.repository;

import org.springframework.data.repository.CrudRepository;
import com.lc.df.customermanagement.domain.Customer;
import java.util.List;
import org.springframework.data.couchbase.core.query.ViewIndexed;
import org.springframework.data.couchbase.core.query.N1qlPrimaryIndexed;


/**
 * @author mallrao
 *
 */
@ViewIndexed(designDoc = "customer")
@N1qlPrimaryIndexed
public interface CustomerRepository extends CrudRepository<Customer, String> {
	public List<Customer> findByFirstName(String firstName);
	public List<Customer> findByLastName(String lastName);
	public List<Customer> findByPostalCode(String postalCode);
	public List<Customer> findByEmailId(String emailId);
	public List<Customer> findByPhoneNumber(String phoneNumber);
	public List<Customer> findByStatus(String status);
	public List<Customer> findByCategory(String category);
	public List<Customer> findAll();

}
