'use strict';

export const status = ['ACTIVE', 'SUSPENDED'];
export const category = ['BRONZE', 'SILVER', 'GOLD',  'PLATINUM'];

// URL to web api
export const getAllCustomerUrl = 'http://ldgrvtibadmr002.ladsys.net:8080/customers';
export const createCustomerUrl = 'http://ldgrvtibadmr002.ladsys.net:8080/customers/create';
export const updateCustomerByIdUrl = 'http://ldgrvtibadmr002.ladsys.net:8080/customers/update';
export const deleteCustomerByIdUrl = 'http://ldgrvtibadmr002.ladsys.net:8080/customers/delete';
export const getCustomersByIdUrl = 'http://ldgrvtibadmr002.ladsys.net:8080/customers/get';
export const getCustomersByFirstNameUrl = 'http://ldgrvtibadmr002.ladsys.net:8080/customers/get/firstname';
export const getCustomersByLastNameUrl = 'http://ldgrvtibadmr002.ladsys.net:8080/customers/get/lastname';
export const getCustomersByPostalCodeUrl = 'http://ldgrvtibadmr002.ladsys.net:8080/customers/get/postalcode';
export const getCustomersByEmailIdUrl = 'http://ldgrvtibadmr002.ladsys.net:8080/customers/get/email';
export const getCustomersByPhoneNoUrl = 'http://ldgrvtibadmr002.ladsys.net:8080/customers/get/phone';
export const getCustomersByStatus = 'http://ldgrvtibadmr002.ladsys.net:8080/customers/get/status';
export const getCustomersByCategory = 'http://ldgrvtibadmr002.ladsys.net:8080/customers/get/category';
