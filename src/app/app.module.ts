import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ProductByCategoryPage } from '../pages/product-by-category/product-by-category';
import { ProductPage } from '../pages/product/product';
import { UserPage } from '../pages/user/user';
import { LogInPage } from '../pages/log-in/log-in';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { CustomizePage } from '../pages/customize/customize';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { ProductDataProvider } from '../providers/product-data/product-data';
import { ProductCategoryDataProvider } from '../providers/product-category-data/product-category-data';
import { CartDataProvider } from '../providers/cart-data/cart-data';
import { CartDetailDataProvider } from '../providers/cart-detail-data/cart-detail-data';
import { UserDataProvider } from '../providers/user-data/user-data';
import { DesignDataProvider } from '../providers/design-data/design-data';
import { ColorDataProvider } from '../providers/color-data/color-data';
import { CityDataProvider } from '../providers/city-data/city-data';
import { CompanyDataProvider } from '../providers/company-data/company-data';
import { FeedbackDataProvider } from '../providers/feedback-data/feedback-data';
import { SalesOrderDataProvider } from '../providers/sales-order-data/sales-order-data';
import { SalesReturnDataProvider } from '../providers/sales-return-data/sales-return-data';
import { CustomizeProductDataProvider } from '../providers/customize-product-data/customize-product-data';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ProductByCategoryPage,
    ProductPage,
    UserPage,
    LogInPage,
    SignUpPage,
    CustomizePage,
    ForgotPasswordPage 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ProductByCategoryPage,
    ProductPage,
    UserPage,
    LogInPage,
    SignUpPage,
    CustomizePage,
    ForgotPasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  
    ProductDataProvider,
    ProductCategoryDataProvider,
    CartDataProvider,
    CartDetailDataProvider,
    UserDataProvider,
    DesignDataProvider,
    ColorDataProvider,
    CityDataProvider,
    CompanyDataProvider,
    FeedbackDataProvider,
    SalesOrderDataProvider,
    SalesReturnDataProvider,
    CustomizeProductDataProvider
  ]
})
export class AppModule {}
