import React from 'react'
import PropTypes from 'prop-types'
import jsyaml from 'js-yaml';
import yml from '../../data/base.yaml';
const resume = jsyaml.load(yml.body);

const Resume = props => {
  console.log(yml)
  return (
    <div>
      
    </div>
  )
}

Resume.propTypes = {

}

export default Resume
