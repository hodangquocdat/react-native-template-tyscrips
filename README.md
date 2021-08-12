# README - App

## 1. System requirements

    Android Studio (For android build & emulator)
    Xcode (For iOS build & simulator, make sure it is version 10 or newer)

## 2. Installing dependencies

MacOS - Using Homebrew, a package manager for macOS

    brew install yarn
    brew install node 
    brew install watchman
    brew cask install adoptopenjdk/openjdk/adoptopenjdk8
    sudo gem install cocoapods

Windows - Using Chocolatey, a package manager for Windows

    choco install -y nodejs.install openjdk8

## 3. Setup iOS development

### 3.1 MacOS

* Installing an iOS Simulator in Xcode: To install a simulator, open Xcode > Preferences... and select the Components tab. Select a simulator with the corresponding version of iOS you wish to use.

## 4. Setup Android development

### 4.1 MacOS

#### 4.1.1 Install the Android SDK

* Android Studio installs the latest Android SDK by default. Building a React Native app with native code, however, requires the Android 10 (Q) SDK in particular. Additional Android SDKs can be installed through the SDK Manager in Android Studio.

* To do that, open Android Studio, click on "Configure" button and select "SDK Manager".

* Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the Android 10 (Q) entry, then make sure the following items are checked:

  * Android SDK Platform 29

  * Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image

* Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the "Android SDK Build-Tools" entry, then make sure that 29.0.2 is selected and check the "Android SDK Command-line Tools (latest)".

* Finally, click "Apply" to download and install the Android SDK and related build tools.

#### 4.1.3 Configure the ANDROID_HOME

* Open Terminal and type:

    ```text
    vi ~/.bash_profile
    ```

* Update .bash_profile with content then save:

    ``` text
    export ANDROID_HOME=$HOME/Library/Android/sdk
    export PATH=$PATH:$ANDROID_HOME/emulator
    export PATH=$PATH:$ANDROID_HOME/tools
    export PATH=$PATH:$ANDROID_HOME/tools/bin
    export PATH=$PATH:$ANDROID_HOME/platform-tools
    ```

* Type:

    ```text
    source ~/.bash_profile
    ```

### 4.2 Windows

#### 4.2.1 Install the Android SDK

Note: Flow 4.1.1

#### 4.2.3 Configure the environment variable

##### 4.2.3.1 Configure the ANDROID_HOME

The React Native tools require some environment variables to be set up in order to build apps with native code.

* Open the Windows Control Panel.

* Click on User Accounts, then click User Accounts again

* Click on Change my environment variables

* Click on New... to create a new ANDROID_HOME user variable that points to the path to your Android SDK

Note: The SDK is installed, by default, at the following location: "%LOCALAPPDATA%\Android\Sdk".You can find the actual location of the SDK in the Android Studio "Settings" dialog, under Appearance & Behavior → System Settings → Android SDK.

##### 4.2.3.2 Configure the JAVA_HOME

The React Native tools require some environment variables to be set up in order to build apps with native code.

* Open the Windows Control Panel.

* Click on User Accounts, then click User Accounts again

* Click on Change my environment variables

* Click on New... to create a new JAVA_HOME user variable that points to the path to your Java Home

Note: The Java Home is installed, by default, at the fllowing location: C:\Program Files\Java\jdk1.8.0_60

##### 4.2.3.3 Add platform-tools, android home to Path

* Open the Windows Control Panel.

* Click on User Accounts, then click User Accounts again

* Click on Change my environment variables

* Select the Path variable.

* Click Edit.

* Click New and add the path to platform-tools, android home to the list.

Note: The default location for this folder is: "%LOCALAPPDATA%\Android\Sdk\platform-tools",
"%LOCALAPPDATA%\Android\Sdk",
"%LOCALAPPDATA%\Android\Sdk\ndk-bundle"
roid-sdk' folder into 'android' folder

## 5. Install node modules, pod

Open Terminal at root project folder and type:

```text
yarn install
```

Only iOS:

```text
cd ios && pod install
```

## 6. RUN

* Run on Android

    ```text
    npx react-native run-android
    ```

* Run on Ios
    ```text
    npx react-native run-ios
    ```

* Clean builds:
    ```text
    cd ios && xcodebuild clean
    chmod 755 android/gradlew
    cd android && ./gradlew clean
    ```

## 7. VALIDATE CODE
  ```text
    yarn global add eslint
  ```

Go to VSC extensions and install eslint (dbaeumer.vscode-eslint)
