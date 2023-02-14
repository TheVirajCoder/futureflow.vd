import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './ContactForm.css';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  return (
    <section className="contact-form">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-9 col-sm-12">
            <form
              onSubmit={handleSubmit((data) => {
                axios.post(
                  'https://futureflow-d9448-default-rtdb.asia-southeast1.firebasedatabase.app/messages.json',
                  {
                    data
                  }
                );
              })}>
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <input
                    {...register('name', {
                      required: {
                        value: true,
                        message: 'Name is required.'
                      }
                    })}
                    className="w-100 m-2 form-control"
                    type="text"
                    placeholder="Your Name"
                  />
                  {errors.name && (
                    <small className="form-text mx-2 text-danger">* {errors.name.message}</small>
                  )}
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <input
                    {...register('email', {
                      required: {
                        value: true,
                        message: 'Email is required.'
                      }
                    })}
                    className="w-100 m-2 form-control"
                    type="text"
                    placeholder="Enter Email"
                  />
                  {errors.email && (
                    <small className="form-text mx-2 text-danger">* {errors.email.message}</small>
                  )}
                </div>
              </div>
              <div className="col-lg-12">
                <textarea
                  {...register('message', {
                    required: {
                      value: true,
                      message: 'Message is required.'
                    }
                  })}
                  className="w-100 m-2 form-control"
                  rows="5"
                  placeholder="Write Something"></textarea>
                {errors.message && (
                  <small className="form-text mx-2 text-danger">* {errors.message.message}</small>
                )}
              </div>
              <div className="text-center">
                <input
                  type="submit"
                  value="Send Message"
                  className="btn btn-outline-primary rounded"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
