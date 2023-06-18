import React from 'react'

export default function About() {
  return (
    <div className='m-2'>
      <h1 className="font-bold text-center">
        Introducing Textoi - Your Text Manipulation and Decoration Tool
      </h1>

      <p className="tracking-[0.01rem] text-center mb-2 ">
        Textoi is a web application designed to empower you to manipulate and decorate text according to your preferences. With a range of intuitive features, Textoi allows you to transform plain text into beautifully styled content effortlessly.
      </p>

      <h2 className="font-[700]">Enhance Your Text:</h2>
      <ul>
        <li className='font-[500] tracking-[0.01rem] mb-1 mt-3'>
          1. Uppercase:
        </li> 
        <span className="mb-3 mt-3">Transform your text into uppercase, giving it a bold and commanding appearance.</span>
        <li className='font-[500] tracking-[0.01rem] mb-1 mt-3'>
          2. Lowercase:
        </li>
        <span className="">Convert your text to lowercase, creating a more subtle and understated effect.</span> 
        <li className='font-[500] tracking-[0.01rem] mb-1 mt-3'>
          3. Sentence Case:
        </li> <span className="mb-3">Elevate your sentences by capitalizing the first letter, adding a touch of sophistication.</span>
        <li className='font-[500] tracking-[0.01rem] mb-1 mt-3'>
          4. Remove Extra Space:
        </li>
        <span className="mb-3">Achieve a clean and coordinated look by eliminating unnecessary spaces between words and sentences.</span> 
      </ul>
      
      <p className='text-center'>
        <h3 className="font-[500] mt-3 ">
          Copy to Clipboard:
        </h3>
          Seamlessly copy the contents of your text area to your clipboard, allowing for easy sharing or pasting elsewhere.
      </p> 

      <p className="text-center">
        <h3 className="font-[500] mt-3 ">
          Clear:
        </h3> 
          Quickly and effortlessly remove all text from the text area, providing a fresh canvas for your next creative endeavor.
      </p>

      <h2 className='font-[700]'>
        Get a Summary:
      </h2>
      <span className='mb-2'>
        Textoi also offers a powerful summary feature that provides insightful information about your text:
      </span>
      <ul className="">
        <li className="">
          <h4 className="font-[500] mb-1">
            - Word Count:
          </h4> Discover how many words are present in your text, allowing you to gauge the length and complexity of your content.
        </li>
        <li className="">
          <h4 className="font-[500] mb-1">
            - Character Count:
          </h4> Understand the total number of characters in your text, helping you assess its brevity or detail.
        </li>
        <li className="">
          <h4 className="font-[500] mb-1">
            - Reading Time:
          </h4> Estimate the time it would take for an average person to read your text, enabling you to optimize readability and engagement.
        </li>
      </ul>

      <h2 className='font-[700] mt-3'>
        Responsive Design:
      </h2>
      <p className="">
        Textoi is designed to cater to both mobile and desktop users. While the mobile version may have slight differences in layout, it offers the same powerful features and seamless user experience as the desktop version.
      </p>


      <h2 className='font-[700] mt-3'>
        Experience the User-Friendly UI:
      </h2>
      <p className="">
        We have carefully crafted Textoi's user interface to provide a delightful and intuitive experience. With its sleek and modern design, we aim to make your text manipulation and decoration journey effortless and enjoyable.
      </p>

      <p className="font-[300] mt-4">
        Try Textoi today and let your creativity flow as you transform your text into captivating content.
      </p>
    </div>
  )
}
