
import { environment } from "./../../environments/environment";
export const API_PATH = {
    statesList: environment.baseUrl + 'bz_FarmerApp/ProductDetail.svc/api/GetAllStateDistrictBlockVilage?apiKey=123&Id=0&Type=S',
    districtList: environment.baseUrl + 'bz_FarmerApp/ProductDetail.svc/api/GetAllStateDistrictBlockVilage?apiKey=123',
    bannersList: environment.baseApiUrl + 'api/Home/GetBZProductBanner?Version=1',
    getValidateCoupon: environment.baseApiUrl + 'api/Home/GetCouponValidity?',
    farmerCategory: environment.baseApiUrl + 'api/Category/Get_MainCategory',
    topSellingProducts: environment.baseApiUrl + 'api/LiveStock/GetTrendsProducts?Version=1&ProdCount=',
    behtarBachatProducts: environment.baseApiUrl + 'api/LiveStock/GetTodayOfferProduct?Version=1&CategoryId=&ProdCount=',
    topBrands: environment.baseApiUrl + 'api/home/getbzappactivebrands?version=1&ProdCount=0',
    subCategories: environment.baseApiUrl + 'api/Category/Get_BZFarmerAppCatagory_New?version=1&KGP=1&Categoryid=',
    haryanaCategoryProduct: environment.baseApiUrl + 'api/LiveStock/GetCategoryWiseProducts?',
    getSubCategoriesProductsByCategoryId: environment.baseApiUrl + 'api/KitchenGarden/GetKGPCategorySubCategoryWiseDataV2',
    getSubCategoryFilter: environment.baseApiUrl + 'api/KitchenGarden/GetKGPCategoryFilters?Version=1&lang=E&KGP_CategoryId=',
    getProductDetails: environment.baseApiUrl + 'api/Home/v1/GetBzAppProductDetailsNew',
    getProductDetailsWithFarmerId: environment.baseApiUrl + 'api/Home/v1/GetBzAppProductDetailsByFarmerID',
    getOTP: environment.loginUrl + 'sendOTPToMobile',
    verifyOTP: environment.loginUrl + 'validateOTP',
    farmerAppLogin: environment.baseUrl + 'bz_FarmerApp/ProductDetail.svc/api/BZFarmerAPPLogin',
    getBestDeal: environment.baseApiUrl + 'api/Home/Insert_BuyerBestDealNotification',
    farmerAppServices: environment.baseApiUrl + 'api/LiveStock/BZFarmerAppServices?Version=1',
    orderCreate: environment.baseApiUrl + 'api/LiveStock/V2/OrderCreate',
    orderCreateAppV1: environment.baseApiUrl +'api/LiveStock/OrderCreateAppV1',   
    GetBrandWiseProduct: environment.baseApiUrl + 'api/LiveStock/GetBrandWiseProduct',
    GetTodayOfferProduct: environment.baseApiUrl + 'api/LiveStock/GetTodayOfferProduct',
    getTrendsProduct: environment.baseApiUrl + 'api/LiveStock/GetTrendsProducts?Version=1&ProdCount=',
    getPromoBanners: environment.baseApiUrl + 'api/Banner/v1/Get_SpecialBanner?',
    getPromoProductBeyondHariana: environment.baseApiUrl + 'api/KitchenGarden/GetKGPCategorySubCategoryWiseData',
    getUserAddressAPI: environment.baseUrl + 'bz_FarmerApp/ProductDetail.svc/api/GetStateDistrictBlockVilage?apiKey=123&Id=',
    updateProifleDetails: environment.baseUrl + 'bz_FarmerApp/ProductDetail.svc/api/UpdateFarmerData',
    getExistingFarmerDetails: environment.baseApiUrl + 'api/Home/GetFarmerAddress?Version=1&FarmerID=',
    getOrderHistory: environment.baseApiUrl + 'api/Home/Get_OrderHistory?Farmerid=',
    getNotificatins: environment.baseApiUrl + 'api/home/BuyerBestDealDetails?BuyerID=',
    GetLeadGeneration: environment.baseApiUrl + 'api/home/PromoLeads?',
    sendEnquiry: environment.baseUrl + 'Tractor_Api_Test/api/Home/CentraliseEnquiry',
    productSearch: environment.baseApiUrl + 'api/search/GetSearchData?',
    productDtlSearch: environment.baseApiUrl + 'api/search/GetProductData?',
    getAdvisory: environment.baseApiUrl + 'api/BZCrop/GetBZCropList?version=1',
    getAdvisoryDetail: environment.baseApiUrl + 'api/BZCrop/GetCropStages?',
    getOrderStatus: environment.baseApiUrl + "api/Home/OrderStatus",
    cancelReturn: environment.baseApiUrl + "api/Home/ProductCancelStatus?typeid=",
    cancelReason: environment.baseApiUrl + "api/Home/CancelReason",
    productReviewFeedback: environment.baseApiUrl + "api/Home/ProductReviewAndRating",
    imageUplaoder: environment.baseApiUrl + "api/Home/ImgConvertor",
    centraliseLogin: environment.baseUrl + 'Tractor_Api_Test/api/Home/CentraliseLogin?',
    centraliseVerifyLogin: environment.baseUrl + 'Tractor_Api_Test/api/Home/CentraliseVerifyLogin?',
    getLeftMenu: environment.baseUrl + 'Tractor_Api_Test/api/Home/GetLeftMenu?sourceid=1&usertypeid=0',
    postToken: environment.baseUrl + 'Tractor_Api_Test/api/Home/GetAndReturnBrowserToken',
    getToken: environment.baseUrl + 'Tractor_Api_Test/api/Notification/ReturnBrowserToken',
    websiteNotificatiion: environment.baseUrl + '/Tractor_Api_Test/api/Notification/CentrailseNotification',
    customerPayRequest: environment.baseUrl + 'Tractor_Api_Test/api/Payments/ToAcceptCustomerPaymentRequest',
    completePayRequest: environment.baseUrl +'Tractor_Api_Test/api/Payments/ToCompletePaymentRequest',
    refundPayRequest: environment.baseUrl +'Tractor_Api_Test/api/Payments/ToRefundPaymentRequest',
    clientFarmerInfo: environment.baseUrl +'Tractor_Api_Test/api/Partnership/ToSaveClientFarmerMapping',
    orderStatus: environment.baseUrl +'bz_FarmerApp/ProductDetail.svc/api/UpdateOrderStatusByBzFarmerApp?'
 
}



