import React, { useEffect, useState } from "react";
import {
  Box,
 
  Heading,
  Text,
  Stack,
  Container,
  
} from "@chakra-ui/react";
import SingleTestimonial from "./SingleTestimonial";
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import TitleComponent from "../TitleComponent";

function TestimonialSection() {
  const [TestimonialList, setTestimonialList] =  useState([]);
  useEffect(()=>{
async function fetData () {

  const res = await fetch('https://sheets.googleapis.com/v4/spreadsheets/1yBgGcCQlg6sO6Jcq0cD7mB1cRq8oykDCTcuCxpTAzRQ/values/Sheet1!A1:Z100?key=AIzaSyCSNSt1fR5ube1KmpR5WMclNBAqbusArGk');
  const data = await res.json();
  let fetchedata = await data.values;


  var objs = fetchedata.map((data) => (
    { 
      name: data[0], 
      designation: data[1],
      feedback: data[2],
      avatarSrc:data[3],
    }
  )).filter((x,i)=>i>0);

  setTestimonialList(objs)
}

fetData();
  },[])

  // const TestimonialList = [
  //   {
  //     name: "Jane Cooper 1",
  //     title: "CEO at ABC Corporation",
  //     heading: "Mindblowing Service",
  //     text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
  //     avatarSrc:
  //       "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
  //   },
  //   {
  //     name: "Jane Cooper 2",
  //     title: "CEO at ABC Corporation",
  //     heading: "Mindblowing Service",
  //     text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
  //     avatarSrc:
  //       "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
  //   },
  //   {
  //     name: "Jane Cooper 3",
  //     title: "CEO at ABC Corporation",
  //     heading: "Mindblowing Service",
  //     text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
  //     avatarSrc:
  //       "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
  //   },
  // ];
  return (
    <div>
      <Box className="light_bg">
        <Container maxW={"full"} py={16} as={Stack} spacing={12} >
          <Stack spacing={0} align={"center"} color={'#fff'}>
            
            <TitleComponent heading='Our Clients Speak'/>
            {/* <Text color="#43ada5">We have been working with clients around the world</Text> */}
          </Stack>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: 10, md: 4, lg: 10 }}
          >
            <div class="container">
              <div class="carousel slide multi-item-carousel" id="TestimonialCourasal">
                <div
                  class="carousel-inner row w-100 mx-0 "
                 style={{background:'transparent'}}
                >
                  {TestimonialList.map((item, i) => {
                    return (
                      <>
                      {i==0?(
                         <div key={i} class="active carousel-item col-md-4">
                         <SingleTestimonial  data={item} />
                       </div>
                      ):(
                        <div key={i} class=" carousel-item col-md-4">
                        <SingleTestimonial  data={item} />
                      </div>
                      )}
                      </>
                     
                    );
                  })}
                </div>
                <a
                  class="carousel-control-prev"
                  href="#TestimonialCourasal"
                  role="button"
                  data-slide="prev"
                >
                 <BiLeftArrowAlt />
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#TestimonialCourasal"
                  role="button"
                  data-slide="next"
                >
                  <BiRightArrowAlt />
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
          </Stack>
        </Container>
      </Box>
    </div>
  );
}

export default TestimonialSection;
