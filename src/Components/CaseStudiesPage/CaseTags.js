import React from 'react'
import {HStack,
    Tag,} from  "@chakra-ui/react";
const CaseTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
    {props.tags.map((tag) => {
      return (
        <Tag size={"md"} variant="solid" className="caseTags" key={tag}>
          {tag}
        </Tag>
      );
    })}
  </HStack>
  )
}

export default CaseTags