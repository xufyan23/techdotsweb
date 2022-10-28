import Head from 'next/head';
import getPosts from "../../services/post";
import Image from "next/image";
import MetaTags from '../../components/common/metaTags';
import { useState } from "react";
import {useDropzone} from 'react-dropzone'
// import {decode as base64_decode, encode as base64_encode} from 'base-64';
import { useForm } from "react-hook-form";
// import * as fs from 'fs';

import styles from '../../styles/ApplyNowForm.module.scss';
import Loader from '../../components/loader';

// const fileTypes = ["PDF", "DOCX", "DOC"];

const ApplyNow = ({post}) => {
  const { register, handleSubmit, handleError, reset, formState: { errors } } = useForm({
    mode: "onBlur"
  });

  const onSubmit = (data) => {
    // console.log(data)
    handleEmail(data);
  };

  const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
    accept: {
      'application/docx': ['.docx'],
      'application/pdf': ['.pdf'],
      'application/msword': ['.DOCX', '.DOC']
    },
    onDrop: acceptedFiles => {
      setFileError(null);
    },
  });

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path}
    </li>
  ));

  const handleCustomErrors = (e) => {
    if (acceptedFiles.length <= 0) {
      setFileError(true);
      return;
    }
    else {
      setFileError(false);
    }
  }

  const [fileError, setFileError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState(false);

  const registerOptions = {
    fullName: { required: "Full name is required" },
    email: { required: "Email is required" },
    phone: { required: "Phone is required" },
    city: { required: "City is required" },
    state: { required: "State is required" },
    zipCode: {required: "Zip Code is required"},
    gender: {required: "Gender is required"},
    position: {required: "Position title is required"},
    expectedSalary: {required: "Expected salary is required"},
    experience: {required: "Experience is required"},
    degree: {required: "Degree is required"},
    linkedIn: {required: "LinkedIn url is required"},
    portfolio: {required: "Portfolio is required"},
    attachFile: {required: "Please attach file"}
  };

  const handleBorderValidation = (error) => {
    return error ? { border: "1px solid #cc0707" } : {}
  }


  const handleEmail = async(data) => {
    // console.log(data.fullName)
    if (acceptedFiles.length <= 0) {
      setFileError("Please select file");
      return;
    }
    setLoading(true);

    // console.log(acceptedFiles[0]);
    const reader = new FileReader();
    reader.readAsDataURL(acceptedFiles[0]);
    reader.onload = async (e) => {
      const text = (reader.result);
      const fileData = text.substring(text.indexOf("base64,") + 7);
      // console.log(text, acceptedFiles[0].name, acceptedFiles[0].type);
      // console.log('ABC ', text.substring(text.indexOf("base64,") + 7));
      const body = JSON.stringify({
        email: "hr@techdots.dev",
        subject: post.title,
        attachments: [
          {
            content: fileData,
            filename: acceptedFiles[0].name,
            type: acceptedFiles[0].type,
            disposition: 'attachment'
          }
        ],
        message: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>Contact Form</title>
          <meta name="description" content="Contact Form">
          <meta name="author" content="SitePoint">
          <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
        </head>

        <body>
          <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';"></div>
          <div class="container" style="margin-left: 20px;margin-right: 20px;">
            <h3>You've got a new mail from ${data.fullName}, their email is: ${data.email}</h3>
            <h3>Personal Information</h3>
            <ul>
              <li><strong>Full Name:</strong> ${data.fullName}</li>
              <li><strong>Phone:</strong> ${data.phone}</li>
              <li><strong>City:</strong> ${data.city}</li>
              <li><strong>Address:</strong> ${data.address ?? 'N/A'}</li>
              <li><strong>ZipCode:</strong> ${data.zipCode ?? 'N/A'}</li>
              <li><strong>Gender:</strong> ${data.gender}</li>
            </ul>
            <h3>Work Information</h3>
            <ul>
              <li><strong>Position Title: </strong>${data.position}</li>
              <li><strong>Expected Salray:</strong> ${data.expectedSalary}</li>
              <li><strong>Total Experience:</strong> ${data.experience}</li>
              <li><strong>Last Degree:</strong> ${data.degree}</li>
              <li><strong>LinkedIn:</strong> ${data.linkedIn}</li>
              <li><strong>Portfolio:</strong> ${data.portfolio ?? 'N/A'}</li>
            </ul>
          </div>
        </body>
        </html>`,
      });
      const res = await fetch("/api/mail", {
        body: body,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        return;
      }

      reset();
      setEmailSuccess(true)
    };
  }

  return (
    <>
      <Head>
        <MetaTags
          title={post.title}
          description={post.displayDesicription}
          keywords={post.title}
        />
      </Head>
      <div>
        <div className={`${styles.applynow_wrapper} ${emailSuccess ? 'd-none' : ''}`}>
          <div className="container">
            <h1 className="text-center mb-4">Apply for {post.title}</h1>

            <form
              onSubmit={handleSubmit(onSubmit, handleCustomErrors)}
              method="post">
              <div {...getRootProps({className: 'dropzone'})} style={fileError ? { borderColor: "#cc0707" }: {}}>
                <input {...getInputProps()} {...register("file", registerOptions.file)}/>
                {
                  !fileError && <span>{files.length > 0 ? files : "Drag and drop file here, or"}</span>
                }
                <span className="text-danger">{fileError ? 'Please attach file': ''}</span>
                <span className="btn primary-btn">Upload CV/Resume</span>
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <div className="form-group mb-3">
                    <label>Full Name*</label>
                    <input type="text" className="form-control" id="fullname"
                      // value={fullName}
                      style={handleBorderValidation(errors.fullName)}
                      {...register("fullName", registerOptions.fullName)}
                      // onChange={(e) => {setFullName(e.target.value)}}
                    />
                    <span className="text-danger">
                      {errors?.fullName && errors.fullName.message}
                    </span>
                  </div>
                </div>
                <div className="col-xs-12 col-sm12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <div className="form-group mb-3">
                    <label>Email*</label>
                    <input type="email" className="form-control" id="email"
                      // value={email}
                      style={handleBorderValidation(errors.email)}
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Email is required",
                        },
                        pattern: {
                          value:
                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                          message: "Your email is not valid",
                        },
                      })}
                      // onChange={(e) => {setEmail(e.target.value)}}
                    />
                    <span className="text-danger">
                      {errors?.email && errors.email.message}
                    </span>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <div className="form-group mb-3">
                    <label>Phone*</label>
                    <input type="text" className="form-control" id="phone"
                      // value={phone}
                      style={handleBorderValidation(errors.phone)}
                      {...register("phone", registerOptions.phone)}
                      // onChange={(e) => {setPhone(e.target.value)}}
                    />
                    <span className="text-danger">
                      {errors?.phone && errors.phone.message}
                    </span>
                  </div>
                </div>
                <div className="col-xs-12 col-sm12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <div className="form-group mb-3">
                    <label> Select Gender*</label>
                    <select className="form-select" name="gender" {...register("gender", registerOptions.gender)}
                    // onChange={(e) => setGender(e.target.value)}
                    style={handleBorderValidation(errors.position)}>
                      <option value="">Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="not to be disclosed">Not to be disclosed</option>
                    </select>
                    <span className="text-danger">
                      {errors?.gender && errors.gender.message}
                    </span>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <div className="form-group mb-3">
                    <label>City*</label>
                    <input type="text" className="form-control" id="city"
                      // value={city}
                      style={handleBorderValidation(errors.city)}
                      {...register("city", registerOptions.city)}
                      // onChange={(e) => {setCity(e.target.value)}}
                    />
                    <span className="text-danger">
                      {errors?.city && errors.city.message}
                    </span>
                  </div>
                </div>
                <div className="col-xs-12 col-sm12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <div className="form-group mb-3">
                    <label>State*</label>
                    <input type="text" className="form-control" id="state"
                      // value={state}
                      style={handleBorderValidation(errors.state)}
                      {...register("state", registerOptions.state)}
                      // onChange={(e) => {setState(e.target.value)}}
                    />
                    <span className="text-danger">
                      {errors?.state && errors.state.message}
                    </span>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <div className="form-group mb-3">
                    <label>Zip Code</label>
                    <input type="text" className="form-control" id="zipcode"
                      // value={zipCode}
                      // onChange={(e) => {setZipCode(e.target.value)}}
                      {...register("zipCode", registerOptions.zipCode)}
                    />
                  </div>
                </div>
                <div className="col-xs-12 col-sm12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <div className="form-group mb-3">
                    <label>Address</label>
                    <input type="text" className="form-control" id="address"
                      // vlaue={address} onChange={(e) => {setAddress(e.target.value)}}
                      {...register("address", registerOptions.address)}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <div className="form-group mb-3">
                    <label>Position Title*</label>
                    <input type="text" className="form-control" id="positionTitle"
                      // value={position}
                      style={handleBorderValidation(errors.position)}
                      {...register("position", registerOptions.position)}
                      // onChange={(e) => {setPosition(e.target.value)}}
                    />
                    <span className="text-danger">
                      {errors?.position && errors.position.message}
                    </span>
                  </div>
                </div>
                <div className="col-xs-12 col-sm12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <div className="form-group mb-3">
                    <label>Expected Salary*</label>
                    <input type="text" className="form-control" id="salaray"
                      // value={expectedSalary}
                      style={handleBorderValidation(errors.expectedSalary)}
                      {...register("expectedSalary", registerOptions.expectedSalary)}
                      // onChange={(e) => {setExpectedtedSalary(e.target.value)}}
                    />
                    <span className="text-danger">
                      {errors?.expectedSalary && errors.expectedSalary.message}
                    </span>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <div className="form-group mb-3">
                    <label>Total Experience (Years)*</label>
                    <input type="text" className="form-control" id="experience"
                      // value={experience}
                      style={handleBorderValidation(errors.experience)}
                      {...register("experience", registerOptions.experience)}
                      // onChange={(e) => {setExperiene(e.target.value)}}
                    />
                    <span className="text-danger">
                      {errors?.experience && errors.experience.message}
                    </span>
                  </div>
                </div>
                <div className="col-xs-12 col-sm12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <div className="form-group mb-3">
                    <label>Last Degree*</label>
                    <input type="text" className="form-control" id="degree"
                      // value={degree}
                      style={handleBorderValidation(errors.degree)}
                      {...register("degree", registerOptions.degree)}
                      // onChange={(e) => {setDegree(e.target.value)}}
                    />
                    <span className="text-danger">
                      {errors?.degree && errors.degree.message}
                    </span>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <div className="form-group mb-3">
                    <label>Linkedin Profile*</label>
                    <input type="text" className="form-control" id="lnkedin"
                      // value={linkedIn}
                      style={handleBorderValidation(errors.linkedIn)}
                      {...register("linkedIn", {
                        required: {
                          value: true,
                          message: "LinkedIn url is required",
                        },
                        pattern: {
                          value:
                          /(https?:\/\/(www.)|(www.))?linkedin.com\/(mwlite\/|m\/)?in\/[a-zA-Z0-9_.-]+\/?/,
                          message: "Your linkedin url is not valid",
                        },
                      })}
                      // onChange={(e) => {setLinkedIn(e.target.value)}}
                    />
                    <span className="text-danger">
                      {errors?.linkedIn && errors.linkedIn.message}
                    </span>
                  </div>
                </div>
                <div className="col-xs-12 col-sm12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <div className="form-group mb-3">
                    <label>Portfolio</label>
                    <input type="text" className="form-control" id="portfolio"
                      // value={portfolio} onChange={(e) => {setPortfolio(e.target.value)}}
                      {...register("portfolio", registerOptions.portfolio)}
                    />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <button type="submit" className="btn primary-btn"> { loading ? <Loader /> : 'Submit'}</button>
              </div>
            </form>
          </div>
        </div>
        {emailSuccess ?
          <div className={styles.submission}>
            <div className={styles.success_icon}>
                <Image className="mb-3" src="https://res.cloudinary.com/dcfzux5xq/image/upload/q_auto/v1666949986/Techdots/images/big-green-check_fgfg10.png"
                  alt="application success" width={"100"} height={"100"} layout='fixed'
                />
            </div>
            <h3>Application Submitted</h3>
            <p>Thankyou for your intrest!</p>
            <p>Our team will review your application and call you for interview</p>
          </div>
          : ''
        }
      </div>
    </>
  )
}

export const getServerSideProps = async pageContext => {
  const pageSlug = pageContext.query.slug;

  if(!pageSlug) {
    return {
      notFound: true
    }
  }

  const result = await getPosts(`*[_type == "post" && slug.current == "${pageSlug}" && "career" in categories[]->title]`);

  if (!result.length) {
    return {
      notFound: true
    }
  }

  const post = result[0];
  return {
    props: {
      post,
    }
  }
};

export default ApplyNow;
