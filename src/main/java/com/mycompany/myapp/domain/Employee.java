package com.mycompany.myapp.domain;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.time.LocalDate;

/**
 * A Employee.
 */
@Entity
@Table(name = "employee")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Employee extends Person implements Serializable {

    @NotNull
    @Column(name = "employee_number", nullable = false)
    private String employeeNumber;

    @ManyToOne
    @JsonIgnoreProperties("employees")
    private Company company;

    public String getEmployeeNumber() {
        return this.employeeNumber;
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
            "id=" + super.getId() +
            ", names='" + super.getNames() + "'" +
            ", lastName='" + super.getLastName() + "'" +
            ", dateOfBirth='" + super.getDateOfBirth() + "'" +
            ", addressPhysical='" + super.getAddressPhysical() + "'" +
            ", addressPostal='" + super.getAddressPostal() + "'" +
            ", telephoneNumber='" + super.getTelephoneNumber() + "'" +
            ", employeeNumber='" + this.getEmployeeNumber() + "'" +
            "}";
    }
}
