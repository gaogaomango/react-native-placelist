package com.rncourse;

import android.support.annotation.Nullable;

import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;

import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.react.NavigationReactNativeHost;
import com.reactnativenavigation.react.ReactGateway;
import com.airbnb.android.react.maps.MapsPackage;
import com.imagepicker.ImagePickerPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {

  @Override
  protected ReactGateway createReactGateway() {
    ReactNativeHost host = new NavigationReactNativeHost(this, isDebug(), createAdditionalReactPackages()) {
      @Override
      protected String getJSMainModuleName() {
        return "index";
      }
    };
    return new ReactGateway(this, isDebug(), host);
  }

  @Override
  public boolean isDebug() {
    return BuildConfig.DEBUG;
  }

  @Nullable
  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
    return getPackages();
  }

  protected List<ReactPackage> getPackages() {
    // Add additional packages you require here
    // No need to add RnnPackage and MainReactPackage
    return Arrays.<ReactPackage>asList(
        // eg. new VectorIconsPackage()
        new VectorIconsPackage(), new MapsPackage(), new ImagePickerPackage());
  }

  // @Override
  // public List<ReactPackage> createAdditionalReactPackages() {
  // return getPackages();
  // }
  //
  //
  // private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
  // @Override
  // public boolean getUseDeveloperSupport() {
  // return BuildConfig.DEBUG;
  // }
  //
  // @Override
  // protected List<ReactPackage> getPackages() {
  // return Arrays.<ReactPackage>asList(
  // new MainReactPackage(),
  // new ImagePickerPackage(),
  // new MapsPackage(),
  // new VectorIconsPackage()
  // );
  // }
  //
  // @Override
  // protected String getJSMainModuleName() {
  // return "index";
  // }
  // };
  //
  // @Override
  // public ReactNativeHost getReactNativeHost() {
  // return mReactNativeHost;
  // }
  //
  // @Override
  // public void onCreate() {
  // super.onCreate();
  // SoLoader.init(this, /* native exopackage */ false);
  // }
}
