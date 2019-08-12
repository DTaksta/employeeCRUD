package com.mycompany.myapp.domain;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.time.LocalDate;

/**
 * A Person.
 */
// @Entity
// @Table(name = "person")
// @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@MappedSuperclass
// public class Person implements Serializable {
public abstract class Person implements Serializable  {
    protected static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected Long id;

    @NotNull
    @Column(name = "names", nullable = false)
    protected String names;

    @NotNull
    @Column(name = "last_name", nullable = false)
    protected String lastName;

    @NotNull
    @Column(name = "date_of_birth", nullable = false)
    protected LocalDate dateOfBirth;

    @NotNull
    @Column(name = "address_physical", nullable = false)
    protected String addressPhysical;

    @NotNull
    @Column(name = "address_postal", nullable = false)
    protected String addressPostal;

    @NotNull
    @Column(name = "telephone_number", nullable = false)
    protected String telephoneNumber;

    @OneToOne
    @JoinColumn(unique = true)

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

    public Person names(String names) {
        this.names = names;
        return this;
    }

    public void setNames(String names) {
        this.names = names;
    }

    public String getLastName() {
        return lastName;
    }

    public Person lastName(String lastName) {
        this.lastName = lastName;
        return this;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public Person dateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
        return this;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getAddressPhysical() {
        return addressPhysical;
    }

    public Person addressPhysical(String addressPhysical) {
        this.addressPhysical = addressPhysical;
        return this;
    }

    public void setAddressPhysical(String addressPhysical) {
        this.addressPhysical = addressPhysical;
    }

    public String getAddressPostal() {
        return addressPostal;
    }

    public Person addressPostal(String addressPostal) {
        this.addressPostal = addressPostal;
        return this;
    }

    public void setAddressPostal(String addressPostal) {
        this.addressPostal = addressPostal;
    }

    public String getTelephoneNumber() {
        return telephoneNumber;
    }

    public Person telephoneNumber(String telephoneNumber) {
        this.telephoneNumber = telephoneNumber;
        return this;
    }

    public void setTelephoneNumber(String telephoneNumber) {
        this.telephoneNumber = telephoneNumber;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Person)) {
            return false;
        }
        return id != null && id.equals(((Person) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Person{" +
            "id=" + getId() +
            ", names='" + getNames() + "'" +
            ", lastName='" + getLastName() + "'" +
            ", dateOfBirth='" + getDateOfBirth() + "'" +
            ", addressPhysical='" + getAddressPhysical() + "'" +
            ", addressPostal='" + getAddressPostal() + "'" +
            ", telephoneNumber='" + getTelephoneNumber() + "'" +
            "}";
    }
}
