<script setup>
// const contactKey = useRuntimeConfig().public.CON_KEY
</script>

<template>
  <div class="lg:px-40 p-4 lg:py-4">
    <div class="md:shadow-md bg-white md:rounded-3xl md:flex xl:flex gap-x-16 justify-between py-8 p-4 sm:p-12 mb-24">
      <!-- <div class="md:w-[50%]">
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
      </div> -->

      <form class="md:w-[50%]" action="https://api.web3forms.com/submit" method="POST">
        <div class="container mx-auto">
          <div class="max-w-md mx-auto my-10 bg-white md:p-5">
            <div class="text-center">
              <h1
                class="my-3 text-3xl font-semibold text-gray-700"
              >
                Contact Us
              </h1>
              <p class="text-gray-400 dark:text-gray-400">
                Fill up the form below to send us a message.
              </p>
            </div>
            <div class="m-7">
              <form action="https://api.web3forms.com/submit" method="POST" id="form">
                <input type="hidden" name="access_key" value="986d1098-4866-4d24-8633-bf3b0fc77f28" />
                <input
                  type="hidden"
                  name="subject"
                  value="Contact form submission"
                />
                <input
                  type="hidden"
                  name="redirect"
                  value="https://web3forms.com/success"
                />
                <div class="mb-6">
                  <label
                    for="name"
                    class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                    >Full Name</label
                  >
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="John Doe"
                    required
                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                <div class="mb-6">
                  <label
                    for="email"
                    class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                    >Email Address</label
                  >
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="you@company.com"
                    required
                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                <div class="mb-6">
                  <label
                    for="message"
                    class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                    >Your Message</label
                  >

                  <textarea
                    rows="5"
                    name="message"
                    id="message"
                    placeholder="Your Message"
                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    required
                  ></textarea>
                </div>
                <div class="mb-6">
                  <button
                    type="submit"
                    class="w-full px-3 py-4 text-white bg-blue-900 rounded-md focus:bg-blue-950 focus:outline-none"
                  >
                    Send Message
                  </button>
                </div>
                <p class="text-base text-center text-gray-400" id="result"></p>
              </form>
            </div>
          </div>
        </div>
      </form>

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
            <a href="mailto:info@kuosmartsolutions.com" class="text-sm hover:underline hover:cursor-pointer">info@kuosmartsolutions.com</a>
            <a href="mailto:sales@kuosmartsolutions.com" class="text-sm hover:underline hover:cursor-pointer">sales@kuosmartsolutions.com</a>
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
