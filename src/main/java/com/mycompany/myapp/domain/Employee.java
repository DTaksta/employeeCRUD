package com.mycompany.myapp.domain;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.time.LocalDate;

/**
 * A Employee.
 */
@Entity
@Table(name = "employee")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Employee implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "names")
    private String names;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "date_of_birth")
    private LocalDate dateOfBirth;

    @Column(name = "address_physical")
    private String addressPhysical;

    @Column(name = "address_postal")
    private String addressPostal;

    @Column(name = "telephone_number")
    private String telephoneNumber;

    @Column(name = "employee_number")
    private String employeeNumber;

    @ManyToOne
    @JsonIgnoreProperties("employees")
    private Company company;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNames() {
        return names;
    }

    public Employee names(String names) {
        this.names = names;
        return this;
    }

    public void setNames(String names) {
        this.names = names;
    }

    public String getLastName() {
        return lastName;
    }

    public Employee lastName(String lastName) {
        this.lastName = lastName;
        return this;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public Employee dateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
        return this;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getAddressPhysical() {
        return addressPhysical;
    }

    public Employee addressPhysical(String addressPhysical) {
        this.addressPhysical = addressPhysical;
        return this;
    }

    public void setAddressPhysical(String addressPhysical) {
        this.addressPhysical = addressPhysical;
    }

    public String getAddressPostal() {
        return addressPostal;
    }

    public Employee addressPostal(String addressPostal) {
        this.addressPostal = addressPostal;
        return this;
    }

    public void setAddressPostal(String addressPostal) {
        this.addressPostal = addressPostal;
    }

    public String getTelephoneNumber() {
        return telephoneNumber;
    }

    public Employee telephoneNumber(String telephoneNumber) {
        this.telephoneNumber = telephoneNumber;
        return this;
    }

    public void setTelephoneNumber(String telephoneNumber) {
        this.telephoneNumber = telephoneNumber;
    }

    public String getEmployeeNumber() {
        return employeeNumber;
    }

    public Employee employeeNumber(String employeeNumber) {
        this.employeeNumber = employeeNumber;
        return this;
    }

    public void setEmployeeNumber(String employeeNumber) {
        this.employeeNumber = employeeNumber;
    }

    public Company getCompany() {
        return company;
    }

    public Employee company(Company company) {
        this.company = company;
        return this;
    }

    public void setCompany(Company company) {
        this.company = company;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Employee)) {
            return false;
        }
        return id != null && id.equals(((Employee) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Employee{" +
            "id=" + getId() +
            ", names='" + getNames() + "'" +
            ", lastName='" + getLastName() + "'" +
            ", dateOfBirth='" + getDateOfBirth() + "'" +
            ", addressPhysical='" + getAddressPhysical() + "'" +
            ", addressPostal='" + getAddressPostal() + "'" +
            ", telephoneNumber='" + getTelephoneNumber() + "'" +
            ", employeeNumber='" + getEmployeeNumber() + "'" +
            "}";
    }
}
