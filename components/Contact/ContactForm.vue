<template>
  <div class="lg:px-40 p-4 lg:py-4">
    <div class="shadow-md bg-white md:rounded-3xl md:flex xl:flex gap-x-16 justify-between py-8 p-4 sm:p-12 mb-24">
      <div class="md:w-[50%]">
        <h1 class="text-xl mb-4 text-blue-900">
          Contact Us
        </h1>
        <div class="grid grid-cols-1">
          <div class=" grid grid-cols-1 mb-2">
            <label class="text-gray-900 text-sm">Fullname</label>
            <input class="rounded-md mb-2 p-2 outline-none border hover:border-blue-700 focus:border-blue-900" type="text" placeholder="Jane Doe">
          </div>
          <div class=" grid grid-cols-1 mb-2">
            <label class="text-gray-900 text-sm">Email</label>
            <input class="border rounded-md mb-2 p-2 outline-none hover:border-blue-700 focus:border-blue-900" type="email" placeholder="jane@email.com">
          </div>
          <div class=" grid grid-cols-1 mb-2">
            <label class="text-gray-900 text-sm">Message</label>
            <textarea class="border rounded-md mb-2 p-2 outline-none hover:border-blue-700 focus:border-blue-900" type="textarea" placeholder="Type here..." />
          </div>
        </div>
        <button
          class="hover:bg-gradient-to-r from-blue-800 to-blue-700
          hover:text-white
          mt-8
          w-[100%]
          px-4
          py-2
          rounded-md
          bg-blue-900
          text-white
          transition
          duration-300
          ease-in-out"
        >
          Submit
        </button>
      </div>

      <div class="md:w-[50%]">
        <div class="mb-8">
          <h1 class="mt-24 md:mt-0 text-xl mb-2 text-blue-900">
            Nigeria
          </h1>
          <p class="text-sm">
            No 85B, Elijiji Lane, Woji, Port-Harcourt, Rivers state, Nigeria
          </p>
        </div>
        <div>
          <h1 class="text-xl mt-8 mb-2 text-blue-900">
            Email Address
          </h1>
          <div class="grid grid-cols-1">
            <a href="mailto:portharcourt@cyphercrescent.com" class="text-sm hover:underline hover:cursor-pointer">kuosmartsolutions@gmail.com</a>
          </div>
        </div>
        <div>
          <h1 class="text-xl mt-8 mb-2  text-blue-900">
            Phone numbers
          </h1>
          <div class="grid grid-cols-1">
            <a href="tel:+2348111113988" class="text-sm hover:underline hover:cursor-pointer">(+234)811 484 9757</a>
            <a href="tel:+4407493823427" class="text-sm hover:underline hover:cursor-pointer">(+234)818 962 7566</a>
          </div>
        </div>
        <div class="mt-8 text-sm">
          <p class="my-3">
            Our offices are open 8am - 6pm GMT/BST (9am - 7pm CET), Monday to Friday, but you can always contact us via email.
          </p>
          <p class="my-3">
            Should your email reach us out of hours then we will contact you when the office re-opens.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
